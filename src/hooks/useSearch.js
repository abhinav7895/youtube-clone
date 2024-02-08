import React, { useState, useEffect } from 'react';

const useSearch = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const initGAPI = async () => {
      await gapi.load('client:auth2', () => {
        gapi.auth2.init({ client_id: '1050523282239-uicpecuvq3r31t12mqklgsgqb4qcqkom.apps.googleusercontent.com' })
          .then(() => {
            setIsSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get());
          });
      });
    };

    initGAPI();
  }, []);

  const authenticate = () => {
    return gapi.auth2.getAuthInstance()
      .signIn({ scope: 'https://www.googleapis.com/auth/youtube.force-ssl' })
      .then(() => {
        console.log('Sign-in successful');
        setIsSignedIn(true);
      })
      .catch((err) => {
        console.error('Error signing in', err);
      });
  };

  const loadClient = () => {
    gapi.client.setApiKey('AIzaSyAO10jm5gfIUTwU8ENXchH_RwBzAJwgBkA');
    return gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
      .then(() => {
        console.log('GAPI client loaded for API');
      })
      .catch((err) => {
        console.error('Error loading GAPI client for API', err);
      });
  };

  const executeSearch = () => {
    return gapi.client.youtube.search.list({
      q: searchInput,
      part: 'snippet',
      type: 'video',
    })
      .then((response) => {
        setSearchResults(response.result.items);
      })
      .catch((err) => {
        console.error('Execute error', err);
      });
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    if (isSignedIn) {
      loadClient().then(() => {
        executeSearch();
      });
    } else {
      authenticate().then(() => {
        loadClient().then(() => {
          executeSearch();
        });
      });
    }
  };

  return {
    isSignedIn,
    searchInput,
    searchResults,
    handleSearchInputChange,
    handleSearch,
  };
};

export default useSearch;
