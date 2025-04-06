function Header() {
    return (
        <div className="flex justify-evenly border-b-2 border-slate-200">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NDG_SR77n8xtaRwNksZyk1oFmSQiQKBN8X4OQj68dwNc8hjWh3QI3qA&s" 
                alt="" 
                width="100px"
                height="100px"
            />
            <ul className="flex items-center gap-6">
                <li>Home</li>
                <li>Search</li>
                <li>Offers</li>
                <li>Help</li>
                <li>SignIn</li>
                <li>Cart</li>
            </ul>

        </div>
    );
}

export default Header;