import Alljobs from "../pages/Alljobs";
import Categories from "../pages/Catagoris";
import Alltags from "../pages/Alltags";
import Jobdetail from "../pages/Jobdetail1";
import Categorydetail from "../pages/Catagprydetail";
import Tagdetail from "../pages/Tagditail";
import Clients1 from "../pages/Clients1";
import Companys from "../pages/Companys";
import Companydetail from "../pages/Companydetail";
import Contact from "../pages/Contact";
import FAQ1 from "../pages/FAQ1";
import Companysignup from "../pages/authpages/Companysignup";
import Employersignup from "../pages/authpages/Employersignup";
import Login from "../pages/authpages/Login";
import Resetpassword from "../pages/authpages/Resetpassword";
import Interpasswordcode from "../pages/authpages/Interpasswordcode";
import Logout from "../pages/privatepages/Logout";
import PrivacyPolicy from "../pages/authpages/Privacypoliciy";
const route = [
  { path: "/sheqlee/all job", element: <Alljobs /> },
  { path: "/sheqlee/Categories", element: <Categories /> },
  { path: "/sheqlee/tags", element: <Alltags /> },
  { path: "/sheqlee/all job/:theidtodisplay", element: <Jobdetail /> },
  { path: "/sheqlee/Categories/:theidtodisplay", element: <Categorydetail /> },
  { path: "/sheqlee/tag/:theidtodisplay", element: <Tagdetail /> },
  { path: "/sheqlee/clients", element: <Clients1 /> },
  { path: "/sheqlee/company", element: <Companys /> },
  { path: "/sheqlee/company/:theidtodisplay", element: <Companydetail /> },
  { path: "/sheqlee/contact", element: <Contact /> },
  { path: "/sheqlee/FAQ", element: <FAQ1 /> },
  { path: "/sheqlee/companysignup", element: <Companysignup /> },
  { path: "/sheqlee/Professional Signup", element: <Employersignup /> },
  { path: "/sheqlee/login", element: <Login /> },
  { path: "/sheqlee/reset password", element: <Resetpassword /> },
  {
    path: "/sheqlee/reset password/Code/New Password",
    element: <Interpasswordcode />,
  },
  { path: "/sheqlee/Logout", element: <Logout /> },
  { path: "/sheqlee/Privacy Policy", element: <PrivacyPolicy /> },
];

export default route;
