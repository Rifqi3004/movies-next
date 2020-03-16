import React from "react";
import {
  SearchOutlined,
  Notifications,
  ShoppingCart
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const HeaderBody = () => {
  return (
    <>
      <div className="container-headerbody">
        <SearchOutlined
          style={{
            fontSize: 25,
            color: "#525252",
            marginRight: 20,
            marginLeft: 10
          }}
        />
        <Badge badgeContent={1} color="primary" style={{ marginRight: 20 }}>
          <Notifications style={{ fontSize: 25, color: "#525252" }} />
        </Badge>
        <Badge badgeContent={1} color="error" style={{ marginRight: 20 }}>
          <ShoppingCart style={{ fontSize: 25, color: "#525252" }} />
        </Badge>
      </div>

      <style jsx>{`
        .container-headerbody {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          
        }
        .icon-header {
          font-size: 25px;
          font-color: #5a5a5a;
        }
        .search {
          margin-right: 50px;
        }
      `}</style>
    </>
  );
};
export default HeaderBody;
