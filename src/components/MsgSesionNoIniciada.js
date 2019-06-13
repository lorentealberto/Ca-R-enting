import React, {Component} from 'react';

class MsgSesionNoIniciada extends Component {
  render() {
    return (
      <h6 className="text-warning">
        ¡Atención! No ha iniciado sesión. Si no tiene cuenta cree una pulsando <a href="#" className="text-warning"><strong>aquí</strong></a>
      </h6>
    );
  }
}

export default MsgSesionNoIniciada;
