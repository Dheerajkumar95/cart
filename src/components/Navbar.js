import React, {useRef,useState,useEffect } from "react";
import logo from "../images/logo.png"; 
import Login from "../images/login.png";
import Logo1 from "../images/popcorn.png";
import profile from "../images/profile.png";
import empty from "../images/6622ab37c6db6ac166dfec760a2f2939.gif"
import loaderImage from "../images/loader.gif";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = ({ cartItems, setCartItems,count,setcount}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);  
    return () => clearTimeout(timer);
    
  }, []);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const [orderedItems, setOrderedItems] = useState([]);
    const total = orderedItems.reduce((sum, item) => sum + Number(item. Menuprice*item.qnty), 0);

const handleOrderNow = () => {
  if (cartItems.length > 0 && MyOrderRef.current) {
    setOrderPlaced(true);
    setOrderedItems(cartItems); // Save ordered items for showing summary
    setCartItems([]); // Clear cart
    setcount(0);
    MyOrderRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  toast.success("successfully order",{
    autoClose: 500, 
  });
};

    
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  const heartRef = useRef();
  const proRef = useRef();
  const loginRef = useRef();
  const SignupRef = useRef();
  const MyProfileRef=useRef();
  const MyOrderRef=useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
    proRef.current.classList.remove("active");
    loginRef.current.classList.remove("active");
    SignupRef.current.classList.remove("active");
    MyProfileRef.current.classList.remove("active"); 
    heartRef.current.classList.remove("active");
    MyOrderRef.current.classList.remove("active");

  };
  const searchHandler = () => {

    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
    proRef.current.classList.remove("active");
    loginRef.current.classList.remove("active");
    MyProfileRef.current.classList.remove("active");  
    heartRef.current.classList.remove("active"); 
    MyOrderRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
    proRef.current.classList.remove("active");
    loginRef.current.classList.remove("active");
    SignupRef.current.classList.remove("active");
    MyProfileRef.current.classList.remove("active");
    heartRef.current.classList.remove("active");
    MyOrderRef.current.classList.remove("active");
  }; 
  const heartHandler = () => {
    heartRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
    proRef.current.classList.remove("active");
    loginRef.current.classList.remove("active");
    SignupRef.current.classList.remove("active");
    MyProfileRef.current.classList.remove("active");
    MyOrderRef.current.classList.remove("active");
  }; 
 
 const profileHandler = () => {
    proRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
    loginRef.current.classList.remove("active");
    SignupRef.current.classList.remove("active");
    MyProfileRef.current.classList.remove("active");
    heartRef.current.classList.remove("active");
    MyOrderRef.current.classList.remove("active");
 };
 const login=()=>{
  loginRef.current.classList.toggle("active");
  proRef.current.classList.remove("active");
 }
 const Signup=()=>{
  SignupRef.current.classList.toggle("active");
  loginRef.current.classList.remove("active");
  proRef.current.classList.remove("active");
  
 }
const Myprofile=()=>{
  MyProfileRef.current.classList.toggle("active");
  loginRef.current.classList.remove("active");
  proRef.current.classList.remove("active");

}
const MyOrder=()=>{
  MyOrderRef.current.classList.toggle("active");
  MyProfileRef.current.classList.remove("active");
  proRef.current.classList.remove("active");
}

const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);
  const handleImageChange = (event) => {
  const file = event.target.files[0];
  setImage(file);    
  };
  const handleClick = (event) => {
  hiddenFileInput.current.click();
  };
let [name, setname] = useState();

let hiddenName = useRef();
  let handleNameChange = (event) => {
   name = event.target.search;
  setname(name);    
  };
  let handleSubmit = (event) => {
    hiddenName.current.click();
    };
   const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };
  const renoveItem1=(id)=>{
     const updatedHeart=count.filter(item=>item.id !==id)
     setcount(updatedHeart);
  }
  const totalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.Menuprice * item.qnty);
    }, 0);
  };
  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, qnty: item.qnty + 1 } : item
      )
    );
  };
  
  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.qnty > 1 ? { ...item, qnty: item.qnty - 1 } : item
      )
    );
  };
  
  return (
    <>
    {isLoading ?(
        <div className="loader-container">
          <img src={loaderImage} alt="Loading..." className="loader-image" />
        </div>
      ) : (
      <header className="header">
        <a href="#home" className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>
        <div className="icons">
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
          <div 
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <div
            className="fas fa-heart"
            id="cart-btn"
            onClick={heartHandler}
          ></div>
           <div
            className="fas fa-user"
            id="cart-btn"
            onClick={profileHandler}
          ></div> 
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>     
        </div>
        {/*Search section */}
        <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
       {/*Cart section */}
      <div  id="dkkk" className="cart-items-container" ref={cartRef}>
      <div className="head"><h1>My Order </h1></div>
        {cartItems.length > 0 ? (
            cartItems.map((item, index)=>(
              <div className="cart-item" key={index}>
                <span onClick={() => removeItem(item.id)}  className="fas fa-times"></span>
                <div className="content">
                  <h3>{item.Name}</h3>
                  <img src={item.img} alt={item.Name} />
                  <div className="price">₹ {item.Menuprice}</div>
                  
                  <div className="quantity-controls">
                  <button onClick={() => increaseQuantity(item.id)} className="qty-btn1">+</button>
                  <p>{item.qnty}</p>
                  <button onClick={() => decreaseQuantity(item.id)} className="qty-btn2">-</button>
                 </div>
                </div>
              </div> 
            ))
          ) 
          :
           (
            <div>
            <img
                src={empty}
                alt="empty"
                style={{ width: "18rem",padding:10}}
              />
            </div>
          )}
           
          {cartItems.length > 0 ? (
           <div>
            <p className="total">Total : ₹ {totalPrice()} </p>
            <button className="btn" onClick={handleOrderNow}>Order Now</button>
           </div>
          )
          : (
            ''
          )}
      </div>
      {/*Whishlist Section*/}
      <div  id="dkkk" className="cart-items-container" ref={heartRef}>
        <div className="head"><h1>My Wishlist </h1></div>
        {count.length > 0 ? (
            count.map((item, index)=>(
              <div className="cart-item" key={index}>
                <span onClick={() =>  renoveItem1(item.id)}  className="fas fa-times"></span>
                <div className="content">
                  <h3>{item.Name}</h3>
                  <img src={item.img} alt={item.Name} />
                  <div className="price">₹ {item.Menuprice}</div>
                </div>
              </div> 
            ))
          ) 
          :
           (
            ""
          )}
          </div>
        {/*Profile section first Page */}
        <div className="cart-items-container1" ref={proRef}>
        <a href="#l" className="loginimg">
          <img src={Login} alt="Login"/>
        </a>
        <div>
          <button onClick={login} className="btn">login</button>
        </div>
            <p className="create">
              Don&apos;t have an account?
                <button onClick={Signup}>Create account</button>
            </p>
      </div>
      {/*Profile section Signup page*/}
      <div className="cart-items-container2" ref={SignupRef}>
        <a href="#l" className="logoimg">
          <img src={Logo1} alt="Logo" />
        </a>
        <h2>Welcome to Login</h2> 
       
        <div>
          <label htmlFor="text">Name</label>
          <input type="text" size="25" placeholder="Dheeraj Kumar" />

          <label htmlFor="email">Email</label>
          <input type="email" size="25" placeholder="dheeraj123@gmail.com" />
           
          <label htmlFor="password">Password</label>
          <input type="password" size="25" placeholder="••••••••••••" />
          <br /><br />
          <button onClick={Myprofile} className="btn">Create&nbsp;Account</button>
        </div>
        
        </div>
       {/*Profile section login page*/}
      <div className="cart-items-container2" ref={loginRef}>
        <a href="#l" className="logoimg">
          <img src={Logo1} alt="Logo" />
        </a>
        <h2>Welcome to Login</h2> 
        
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" size="25" placeholder="dheeraj123@gmail.com" />
           
          <label htmlFor="password">Password</label>
          <input type="password" size="25" placeholder="••••••••••••" />
          <br /><br />
          <button onClick={Myprofile} className="btn">login</button>
        </div>
       
        </div>
         {/*Profile section MyProfile page*/}
        <div className="cart-items-container3" ref={MyProfileRef}>
          <h1>My Profile</h1>
        <div className="image-upload-container">
      <div className="box-decoration">
         
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
          ) : (
          <img src={profile} alt="upload image" className="img-display-before" />
          )}
          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
     <div className="myprofile">
      <h2>Name:</h2>
      <input size="25"
      type="text" 
      placeholder="Enter Name"
      onChange={handleNameChange} 
      ref={hiddenName}
      />
     </div>
     <div  className="myprofile1">
      <h2>Phone:</h2>
      <input size="12"
      type="tel" 
      placeholder="Enter phone"
      onChange={handleNameChange} 
      ref={hiddenName}
      />
     </div>
     <div  className="myprofile2">
      <h2>email:</h2>
      <input size="27"
      type="email" 
      placeholder="Enter email"
      onChange={handleNameChange} 
      ref={hiddenName}
      />
     </div>
     <div  className="myprofile3">
      <h2>Address:</h2>
      <textarea rows={4} cols={25}
      type="text" 
      placeholder="Enter Address"
      onChange={handleNameChange} 
      ref={hiddenName}
      />
     </div>
     <button onClick={handleSubmit} className="btn">Submit</button>
     <div>
        <button  onClick={MyOrder} className="btn1">My order</button>
        </div> 
    </div>
    <div id="dkkk" className="cart-items-container4" ref={MyOrderRef}>
        {orderPlaced && (
  <div className="order-confirmation">
    <h3>🎉 Thank you for your order!</h3>
    <p>We’re preparing your food. Track your order status below.</p>

    {/* Ordered Items Summary */}
    <div className="ordered-items">
      <h4>Your Ordered Items:</h4>
      <div className="ordered-items-list">
        {orderedItems.map((item, index) => (
          <div key={index} className="ordered-item">
            <img src={item.img} alt={item.Name} className="ordered-item-img" />
            <p>{item.Name}&nbsp;&nbsp;Q:{item.qnty}</p>
            </div>
        ))}
        <p><strong>Total: ₹ {total}/-</strong></p>
      </div>
      <div class="tracker">
    <div class="step line">
      <div class="icon">🟢</div>
      <div class="label">Placed</div>
    </div>
    <div class="step line">
      <div class="icon">🛒</div>
      <div class="label">Preparing</div>
    </div>
    <div class="step line white-line">
      <div class="icon">🚚</div>
      <div class="label">On The Way</div>
    </div>
    <div class="step">
      <div class="icon">✅</div>
      <div class="label">Delivered</div>
    </div>
  </div>
    </div>
  </div>
  
)}

    </div>
      </header>
        )}
    </>
  );
};

export default Navbar;
