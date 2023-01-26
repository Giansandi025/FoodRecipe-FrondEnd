import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styleSearch from '../searchParams/Search.module.css';
import { Row, Col } from 'reactstrap';
import Footer from '../../components/footer/footer';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import NavBarPrimary from '../../components/navbar/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipe } from '../../Redux/action/recipe';

const Search = () => {
  const [queryParams] = useSearchParams();
  const navigate = useNavigate();

  const resultSearch = queryParams.get('searchRecipe');

  const dispatch = useDispatch();
  const [search, setSearch] = useState(resultSearch);

  // All recipe
  const allRecipe = useSelector((state) => {
    return state.allRecipe;
  });

  // console.log(allRecipe.data.length)
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllRecipe(search));
  }, [dispatch, search]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(getAllRecipe(search));

    return navigate(`/recipe?searchRecipe=${search}`);
  };

  return (
    <>
      <Row className="d-flex flex-column gx-0">
        {/* <h1>{search}</h1> */}
        <Col>
          <NavBarPrimary />
        </Col>
        <Col className={styleSearch.row}>
          <section className={`row second-hero d-flex flex-column gx-0 ${[styleSearch.hero, styleSearch.widthRow]}`}>
            <div className={`${styleSearch.texListNewRecipe} ${styleSearch.widthCardImg}`}>
              <h1 className={styleSearch.textAllrecipeH1}>Search Recipe</h1>
            </div>
            <div>
              <form onSubmit={(e) => onSubmit(e)} action="">
                <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" className={styleSearch.formGroupInput} placeholder="Search Recipe" />
              </form>
            </div>
            <div className={`${styleSearch.cardNewRecipe} ${styleSearch.widthCardImg}`}>
              <div className="row">
                {allRecipe.isLoading ? (
                  <div className={styleSearch.messageError}>Loading</div>
                ) : allRecipe.isError ? (
                  <div className={styleSearch.messageError}>Error</div>
                ) : allRecipe.data.length === 0 ? (
                  <div className={styleSearch.messageError}>Data Not Found</div>
                ) : (
                  allRecipe.data.map((item, index) => {
                    return (
                      <div key={index} className={`col-sm-6 col-md-4 col-lg-4 ${styleSearch.divCardImg}`}>
                        <div className=" d-flex justify-content-center">
                          <Link to={`/${item.id}`}>
                            <div className={styleSearch.textDecorationListNewRecipe}>
                              <img src={`${process.env.REACT_APP_API_URL}/${item.image}`} className={styleSearch.listNewRecipeImg} alt="" />
                              <p className={styleSearch.tagPListNewRecipe}>{item.title}</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </section>
        </Col>
        <Col>
          <Footer />
        </Col>
      </Row>
    </>
  );
};

export default Search;
