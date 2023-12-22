import "./Post.css";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiCompassDiscoverLine } from "react-icons/ri";
import Postphoto1  from "/Users/mac/Desktop/FILE2003/client/src/components/timeline/post/sky.jpeg";
import Postphoto2  from "/Users/mac/Desktop/FILE2003/client/src/components/timeline/post/sky.jpeg";
import Postphoto3  from "/Users/mac/Desktop/FILE2003/client/src/components/timeline/post/sky.jpeg";
import { IconName } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Post() {
  return (
    <div className="buttons">
        
        <button className="user">
              <FaUser size={'1.5rem'}/>  
              <span>User 85479</span>      
          </button>
  <div classname="post">
   <img src={Postphoto1}
    className="postphoto"
   />
<div className="buttons">
        
        <button className="like">
              <FcLike size={'1.5rem'}/>        
          </button>
          <button className="comment">
              <FaComment size={'1.5rem'}/>
          </button>
          <div class="text">
        Liked by 6666
    </div>
     </div>
     </div>
 
 
 
     <button className="user">
              <FaUser size={'1.5rem'}/>  
              <span>User 1718</span>      
          </button>
  <div classname="post">
   <img src={Postphoto2}
    className="postphoto"
   />
<div className="buttons">
        
        <button className="like">
              <FcLike size={'1.5rem'}/>        
          </button>
          <button className="comment">
              <FaComment size={'1.5rem'}/>
          </button>
          <div class="text">
        Liked by 444
    </div>
     </div>
     </div>
 
 
 
     <button className="user">
              <FaUser size={'1.5rem'}/>  
              <span>User 909099</span>      
          </button>
  <div classname="post">
   <img src={Postphoto3}
    className="postphoto"
   />
<div className="buttons">
        
        <button className="like">
              <FcLike size={'1.5rem'}/>        
          </button>
          <button className="comment">
              <FaComment size={'1.5rem'}/>
          </button>
          <div class="text">
        Liked by 78
    </div>
     </div>
     </div>
 
     </div>
     
     
  );
}
 
export default Post;