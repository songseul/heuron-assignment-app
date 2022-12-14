import { NavProps } from '../models/Navigation';

function Nav(props: NavProps) {
  return (
    <nav className="nav-style">
      {props.title ? props.title : 'Heuron, Neuron & AI'}{' '}
      <style jsx>{`
        .nav-style {
          width: 100%;
          height: 80px;
          text-align: center;
          font-size: 1.5rem;
          line-height: 80px;
          box-shadow: 2px 2px skyBlue, -1em 0 0.4em olive;
        }
      `}</style>
    </nav>
  );
}

export default Nav;
