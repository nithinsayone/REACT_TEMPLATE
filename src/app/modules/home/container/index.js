import React, { useEffect } from 'react';
import '../style/home.scss';
import { getStarshipDetails } from '../services';
import Loader from '~shared/components/loader';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

  const dispatch = useDispatch();

  const loading = useSelector(state => state.home.starship_details.loading);
  const hasError = useSelector(state => state.home.starship_details.hasError);
  const response = useSelector(state => state.home.starship_details.response);
  const error = useSelector(state => state.home.starship_details.error);

  useEffect(() => {
    dispatch(getStarshipDetails(9));
  }, []);

  const HomeContent = () => {
    if(hasError)
      return <div>{error}</div>; // display the error if error from api. In real application reaplce this with a toast notification
    else
      return <div>{JSON.stringify(response)}</div>;
  };

  if (loading)
    return <Loader />;
  return (
    <div>
      <HomeContent />
    </div>
  );
};

export default Home;