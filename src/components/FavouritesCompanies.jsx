import { useSelector } from "react-redux";

const FavouritesCompanies = () => {
  const companies = useSelector((state) => state.favourites.favouritesCompanies.content);

  return companies.map((company, index) => <p key={index}>{company}</p>);
};

export default FavouritesCompanies;
