import error from '../images/error.jpg';

export default function ErrorPage() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={ error } alt="Error 404" width={600} height={600} />
    </div>
  );
}