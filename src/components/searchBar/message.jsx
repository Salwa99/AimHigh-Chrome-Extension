import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {BiLogoBing, BiLogoYahoo} from "react-icons/bi"
import { Select, Option } from "@material-tailwind/react";


function Message() {
  const [query, setQuery] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("google");

  const handleSearch = () => {
    if (query) {
      let searchUrl;
      switch (selectedEngine) {
        case "google":
          searchUrl = `https://www.google.com/search?q=${query}`;
          break;
        case "bing":
          searchUrl = `https://www.bing.com/search?q=${query}`;
          break;
        case "yahoo":
          searchUrl = `https://search.yahoo.com/search?p=${query}`;
          break;

        default:
          searchUrl = "";
      }

      window.location.href = searchUrl;
    }
  };

    const handleKeyPress = (e) => {
      if(e.key == 'Enter') {
        handleSearch()
      }
    }

    
  return (
    <div className=" bg-gray-900 bg-opacity-70 flex items-center absolute  buttom-0 left-0  justify-center h-screen p-0 ">
      <div className="flex gap-3 w-1/4">
        <BsSearch className="text-2xl" /> {/* Increase icon size */}
        <input
          className="w-[250px]  h-10 pl-55 text-gray-600 bg-gray-300 bg-opacity-40  rounded-lg outline-none focus:bg-opacity-100 transition duration-300 hover:bg-opacity-100"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="w-72">
        <Select 
          value={selectedEngine}
          onChange={(e) => setSelectedEngine(e.target.value)}
          target="_self"
          onClick={handleSearch}
          className="h-10 px-5 text-black rounded-lg outline-none focus:bg-opacity-100 transition duration-300 "
          >
          <Option value="google" className="pt-6"><FcGoogle className="text-xl" /> Google</Option>
          <Option value="bing"><BiLogoBing className="text-xl" />Bing</Option>
          <Option value="yahoo"><BiLogoYahoo className="text-xl"/>Yahoo</Option>
        </Select>
          </div>
      </div>
    </div>
  );
}

export default Message;
