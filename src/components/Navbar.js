function Navbar({setPage}) {
    return ( 
        <nav>
            <button onClick={()=>setPage('Planets')}>Planétes</button>
            <button onClick={()=>setPage('People')}>Les gens</button>
        </nav>
     );
}

export default Navbar;