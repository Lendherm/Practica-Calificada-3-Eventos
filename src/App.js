import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Empleado extends React.Component {
  render() {
    return (
      <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
        <h1>{this.props.nombre}</h1>
        <h2>{this.props.cargo}</h2>
        <img src={this.props.foto} className="img-fluid rounded-circle" alt="Foto del empleado" style={{ width: '200px', height: '200px' }} />
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row">
        <Empleado nombre="Ana" cargo="CEO" foto="https://pbs.twimg.com/media/EzGvcIFXIAAWnPg.jpg" />
        <Empleado nombre="EVA" cargo="CTO" foto="https://pbs.twimg.com/media/EzGvKmRWUAE-nIV.jpg" />
        <Empleado nombre="Pep" cargo="Becario" foto="https://scontent.fmex16-1.fna.fbcdn.net/v/t1.6435-9/72468259_322932499109601_9032549407186564871_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=973b4a&_nc_ohc=2K0whLHk7pAAX_Olrwq&_nc_ht=scontent.fmex16-1.fna&oh=00_AfC8l_fvNp21FBip2do7zRUWeC4ZaNUAvm-jQByLagz_gw&oe=64974E21" />
      </div>
    </div>
  );
}
