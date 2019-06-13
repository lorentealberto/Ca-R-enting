import React, {Component} from 'react';
import MsgSesionNoIniciada from './MsgSesionNoIniciada';

class Cabecera extends Component {
  render() {
    return (
      <div className="container-fluid bg-info">
        <div className="row">
          <div className="col mt-3">
            <MsgSesionNoIniciada/>
          </div>
          <div className="col">
            <h1 className="text-right">
              <a href="#" className="text-white">Ca(R)enting</a>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Cabecera;
