import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{backgroundColor:match?"#3A4256":"", color:match?"white":"",padding:match?"7px 12px 7px 12px":"" ,borderRadius:match?"5px":"" ,fontWeight:match?"bold":""}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
  export default CustomLink;