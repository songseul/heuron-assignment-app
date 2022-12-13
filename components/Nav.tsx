type NavProps = {
  title?: string;
};

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
        }
      `}</style>
    </nav>
  );
}

export default Nav;
