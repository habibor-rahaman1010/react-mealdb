import { useState } from "react";
import Foods from "../Foods/Foods";

const Navbar = () => {
    const [i, setI] = useState("");
    const handleSearch = (event) => {
        setI(event.target.value);
    }

    return (
        <div>
            <div className="input-group mb-3 w-50 mx-auto mt-4">
                <input onChange={handleSearch} id="inputText" type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                {/* <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button> */}
            </div>
            <Foods input = {i}></Foods>
        </div>
    );
};

export default Navbar;