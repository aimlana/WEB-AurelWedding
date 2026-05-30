import '../styles/maintenance.css'; 

export default function Maintenance() {
  return (
    <div className='maintenance-container'>
      <div className='maintenance-content'>
        <div className='icon'>⚠️</div>
        <h1>Website Unavailable</h1>
        <p>
          This website is currently under maintenance or pending final
          administrative setup. Please check back later or contact the
          administrator.
        </p>
      </div>
    </div>
  );
}

