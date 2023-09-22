import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


export function NotFound() {
  const navigate = useNavigate(); 
  const goToHome = () => {
    navigate('/');
  }
  return (
    <Card style={{ width: '50rem', margin: 'auto', marginTop: '5rem' }}>
      <Card.Body>
        <Card.Title>Snippet Not Found!</Card.Title>
        <Card.Text>
          Sorry, this snippet is not found. It is either expired or an invalid URL.
        </Card.Text>
        <Button variant="primary" onClick={goToHome}>Go to homepage</Button>
      </Card.Body>
    </Card>
  );
}