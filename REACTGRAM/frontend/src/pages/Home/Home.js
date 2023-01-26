import "./Home.css";

// Components
import LikeContainer from "../../components/LikeContainer";
import PhotoItem from "../../components/PhotoItem";
import { Link } from "react-router-dom";

// hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

// redux
import { getPhotos, like } from "../../slices/photoSlice";

const Home = () => {
  const dispatch = useDispatch();
  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photo, loading } = useSelector((state) => state.photo);

  // load all photos
  useEffect(() => {
    dispatch(getPhotos());
    console.log(photo);
  }, [dispatch]);

  // like a photo
  const handleLike = (photo) => {
    dispatch(like(photo._id));
    resetMessage();
  };

  if (loading) {
    return <p>Carregando..</p>;
  }

  return <div id="home"></div>;
};

export default Home;
