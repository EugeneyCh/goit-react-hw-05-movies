import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const goHomeHandler = () => navigate('/');

  return (
    <>
      <div style={{ marginTop: 10, marginLeft: 20 }}>Page not found</div>
      <div style={{ marginTop: 10, marginLeft: 20 }}>
        <button onClick={goHomeHandler}>Go back home</button>
      </div>
    </>
  );
}
export default NotFound;
