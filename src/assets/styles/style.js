const style = {
  LeftSideLogin: {
    width: '50%',
    height: '100vh',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'rotate(-180deg)',
    borderRadius: '20px'
  },
  LeftSideImg: {
    zIndex: '99',
    position: 'absolute',
    transform: 'rotate(180deg)'
  },
  ContainerLogin: {
    height: '100hv',
    width: '100%',
    display: 'flex'
  },
  RightSideLogin: {
    width: '50%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  LoginFormControl: {
    width: '38%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  Form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  FormTitle: {
    color: '#EFC81A',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  FormDescription: {
    color: '#8692A6',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '400'
  },
  FormEmail: {
    width: '100%',
    marginTop: '15px',
    fontSize: '13px',
    display: 'flex',
    flexDirection: 'column'
  },
  FormPassword: {
    width: '100%',
    fontSize: '13px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15px'
  },
  FormInput: {
    width: '100%',
    marginTop: '13px',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #8692A6'
  },
  FormTerms: {
    width: '100%',
    fontSize: '13px',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center'
  },
  FormTerms1: {
    fontSize: '13px',
    marginTop: '10px'
  },
  FormButton: {
    height: '40px',
    width: '100%',
    backgroundColor: '#EFC81A',
    color: '#ffffff',
    border: 'none',
    marginTop: '10px',
    borderRadius: '6px'
  },
  ForgotLink: {
    width: '100%',
    fontWeight: 'normal',
    paddingTop: '15px',
    textAlign: 'right'
  },
  ForgotText: {
    textDecoration: 'none',
    color: '#999999'
  },
  RegisterLink: {
    fontWeight: 'normal',
    paddingTop: '15px',
    textAlign: 'center',
    color: '#999999'
  },
  RegisterText: {
    textDecoration: 'none',
    color: '#EFC81A'
  },
  Navbar: {
    width: '100%',
    display: 'flex',
    position: 'relative'
  },
  PrimaryMenu: {
    width: '80%',
    paddingTop: '20px'
  },
  PrimaryMenuUl: {
    display: 'flex',
    listStyleType: 'none'
  },
  PrimaryMenuUlLi: {
    padding: '10px 35px'
  },
  PrimaryMenuUlLiA: {
    textDecoration: 'none',
    color: '#2E266F'
  },
  SecondaryMenu: {
    width: '34.3%',
    backgroundColor: 'rgba(239,200,26,1)',
    paddingTop: '20px'
  },
  SecondaryMenuUl: {
    display: 'flex',
    listStyleType: 'none'
  },
  SecondaryMenuUlLi: {
    padding: '10px',
    paddingLeft: '220px'
  },
  SecondaryMenuUlLiA: {
    textDecoration: 'none',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center'
  },
  SecondaryMenuUlLiIcon: {
    width: '45px',
    height: '45px',
    backgroundColor: '#FFFFFF',
    color: '#2E266F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    marginRight: '10px',
    fontSize: '25px'
  },
  ContainerStyle: {
    margin: '0px',
    padding: '0px',
    fontFamily: 'airbnb-cereal'
  },
  Hero: {
    height: '100vh',
    width: '100%',
    display: 'flex'
  },
  Content: {
    height: '100vh',
    width: '70%'
  },
  Jumbotron: {
    position: 'absolute',
    top: '380px',
    left: '100px'
  },
  JumbotronH1: {
    fontSize: '50px',
    width: '80%',
    color: '#2E266F'
  },
  JumbotronFormGroup: {
    display: 'flex',
    height: '55px',
    width: '550px',
    backgroundColor: '#FFFFFF'
  },
  JumbotronFormGroupIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px'
  },
  JumbotronFormGroupInput: {
    width: '80%',
    border: 'none'
  },
  Decoration: {
    height: '100vh',
    backgroundColor: '#EFC81A',
    width: '30%'
  },
  Lettuce: {
    top: '-50px',
    right: '255px',
    position: 'absolute'
  },
  Salad: {
    width: '700px',
    height: '700px',
    top: '200px',
    right: '255px',
    position: 'absolute'
  },
  Footer: {
    width: '100%',
    height: '600px',
    backgroundColor: '#EFC81A',
    display: 'flex',
    marginTop: '100px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'airbnb-cereal-light'
  },
  FooterTitle: {
    marginTop: '170px',
    width: '100%',
    textAlign: 'center'
  },
  FooterTitleH1: {
    fontSize: '60px',
    color: '#2E266F',
    fontWeight: 'Bold'
  },
  FooterDesc: {
    width: '100%',
    textAlign: 'center'
  },
  FooterDescH3: {
    color: ' #707070',
    fontSize: '18px',
    marginTop: '50px'
  },
  FooterLink: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '150px',
    marginBottom: '0px'
  },
  FooterLinkSmall: {
    marginLeft: '20px',
    color: '#707070'
  },
  Article: {
    display: 'flex',
    flexDirection: 'column'
  },
  ArticleTitle: {
    marginTop: '20px',
    marginLeft: '100px',
    display: 'flex'
  },
  ArticleTitleHead: {
    height: '70px',
    width: '550px',
    display: 'flex',
    borderLeft: '10px solid #EFC81A',
    alignItems: 'center'
  },
  ArticleTitleHeadH1: {
    paddingLeft: '10px',
    color: '#2E266F',
    fontSize: '25px',
    fontWeight: 'bold'
  },
  NewRecipe: {
    color: '#3F3A3A'
  },
  ListRecipe: {
    marginTop: '70px',
    height: '600px',
    width: '100%',
    display: 'flex'
  },
  ListRecipeRecipe: {
    marginLeft: '30px',
    height: '500px',
    width: '500px',
    borderRadius: '10px',
    backgroundColor: 'red'
  },
  ListRecipeRecipeTitle: {
    width: '100px',
    height: '100px'
  },
  ListRecipeRecipeTitleH1: {
    paddingLeft: '50px',
    paddingTop: '420px',
    fontSize: '25px'
  },
  ListRecipeRecipeTitleH1A: {
    textDecoration: 'none',
    color: '#FFF5EC'
  },
  ListRecipeRecipe1: {
    backgroundImage: 'url(../images/pizza.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  ListRecipeRecipe2: {
    backgroundImage: 'url(../images/burger.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  ArticleMainContent: {
    marginTop: '60px',
    width: '100%',
    height: '700px',
    display: 'flex',
    marginBottom: '150px'
  },
  ArticleMainContentLeft: {
    height: '700px',
    backgroundColor: '#EFC81A',
    width: '30%'
  },
  ArticleMainContentRight: {
    height: '700px',
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  RightTextContent: {
    width: '30%',
    height: '300px',
    marginLeft: '200px'
  },
  RightTextContentUnderline: {
    width: '100px',
    borderBottom: '2px solid #6F6A40',
    marginTop: '20px'
  },
  RightTextContentH1: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#3F3A3A'
  },
  RightTextContentH3: {
    marginTop: '30px',
    fontFamily: 'airbnb-cereal-light',
    color: '#3F3A3A',
    fontSize: '19px',
    fontWeight: 'bold'
  },
  RightTextContentButton: {
    marginTop: '20px',
    height: '50px',
    width: '150px',
    backgroundColor: '#EFC81A',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '10px'
  },
  ArticleMainContentNewPhoto: {
    marginTop: '70px',
    marginLeft: '120px',
    height: '680px',
    width: '680px',
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '10px',
    backgroundColor: 'white'
  },
  PopularRowRecipe: {
    width: '100%',
    display: 'flex',
    marginTop: '70px'
  },
  PopularRecipe: {
    marginLeft: '100px',
    marginBottom: '70px',
    height: '500px',
    width: '500px',
    borderRadius: '10px'
  },
  PopularRecipeTitle: {
    width: '205px',
    height: '100px'
  },
  PopularRecipeTitleH1: {
    paddingLeft: '50px',
    paddingTop: '400px'
  },
  PopularRecipeTitleH1A: {
    textDecoration: 'none',
    color: '#FFF5EC',
    fontSize: '23px',
    fontWeight: 'bold'
  },
  PopularRecipes: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#FFFFFF'
  },
  DetailTitle: {
    marginTop: '100px',
    color: '#2E266F',
    fontSize: '30px'
  },
  DetailImage: {
    height: '600px',
    width: '900px',
    marginTop: '50px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '10px',
    backgroundColor: 'yellow'
  },
  GoToVideoButton: {
    marginTop: '20px',
    height: '50px',
    width: '250px',
    backgroundColor: '#EFC81A',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '15px'
  },
  FormComment: {
    display: 'flex',
    height: '300px',
    width: '100%',
    backgroundColor: '#F6F5F4',
    marginTop: '100px',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextAreaComment: {
    height: '100%',
    width: '100%',
    border: 'none',
    backgroundColor: '#F6F5F4',
    resize: 'none',
    fontFamily: 'airbnb-cereal',
    borderRadius: '10px',
    padding: '20px'
  },
  CommentButton: {
    height: '50px',
    width: '250px',
    backgroundColor: '#EFC81A',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '6px',
    marginTop: '40px'
  },
  CommentSection: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    width: '60%',
    height: '200px'
  },
  UserComment: {
    width: '50px',
    height: '50px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'red',
    borderRadius: '50px'
  },
  ProfileImage: {
    height: '150px',
    width: '150px',
    border: 'none',
    borderRadius: '100px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '200px',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'flex-end'
  },
  DeleteIcon: {
    zIndex: '999',
    position: 'absolute',
    marginTop: '8px',
    marginLeft: '220px'
  },
  ProfileMenu: {
    width: '80%',
    marginTop: '100px'
  },
  ProfileMenu2: {
    paddingLeft: '100px',
    paddingRight: '100px'
  },
  MyRecipe: {
    width: '80%',
    marginLeft: '180px'
  },
  MyRecipe1: {
    width: '300px',
    height: '200px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px'
  },
  MyRecipeh5: {
    width: '140px',
    height: '60px',
    color: '#FFFFFF',
    fontFamily: 'airbnb-cereal-light',
    fontWeight: 'bold',
    marginLeft: '20px',
    marginTop: '112px'
  },
  ImageUpload: {
    height: '400px',
    width: '60%',
    marginTop: '200px',
    backgroundColor: '#F6F5F4',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  InputRecipeImage: {
    position: 'absolute',
    width: '60%',
    height: '400px',
    overflow: 'none'
  },
  InsertTitle: {
    width: '60%',
    height: '50px',
    marginTop: '35px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  RecipeTitle: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F6F5F4',
    border: 'none',
    borderRadius: '15px',
    fontSize: '15px',
    paddingLeft: '30px'
  },
  InsertIngredients: {
    height: '300px',
    width: '60%',
    marginTop: '45px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  RecipeIngredients: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F6F5F4',
    border: 'none',
    borderRadius: '15px',
    fontSize: '15px',
    paddingLeft: '30px',
    paddingTop: '20px',
    fontFamily: 'airbnb-cereal',
    resize: 'none'
  },
  InsertVideo: {
    width: '60%',
    height: '50px',
    marginTop: '45px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  RecipeVideo: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F6F5F4',
    border: 'none',
    borderRadius: '15px',
    fontSize: '15px',
    paddingLeft: '30px'
  },
  PostRecipe: {
    marginTop: '70px',
    height: '40px',
    width: '20%',
    backgroundColor: '#EFC81A',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '6px'
  }
}
export default style
