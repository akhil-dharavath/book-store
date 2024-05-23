import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import BoyIcon from "@mui/icons-material/Boy";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const HomePage = () => {
  return (
    <div class="homepage">
      <header>
        <MenuBookIcon sx={{ fontSize: 60 }} />
        <span>Book Store</span>
      </header>
      <div class="form-group">
        <span>
          <AccountBoxIcon sx={{ fontSize: 30 }} />
        </span>
        <input class="form-field" type="text" placeholder="Book Id" value={1} />
      </div>

      <div class="form-group">
        <span>
          <PhotoAlbumIcon sx={{ fontSize: 30 }} />
        </span>
        <input class="form-field" type="text" placeholder="Book Name" />
      </div>

      <div className="second">
        <div class="form-group">
          <span>
            <BoyIcon sx={{ fontSize: 30 }} />
          </span>
          <input class="form-field" type="text" placeholder="Publisher" />
        </div>

        <div class="form-group">
          <span>
            <AttachMoneyIcon sx={{ fontSize: 30 }} />
          </span>
          <input class="form-field" type="text" placeholder="Price" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
