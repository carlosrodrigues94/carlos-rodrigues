import { useSelector } from "react-redux";
import { RootState } from "../store/config";

export const Title = () => {
  const { data } = useSelector((state: RootState) => state.portfolio);
  return (
    <header className="mb-12 text-center">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      <p className="text-xl mt-2">{data.title}</p>
    </header>
  );
};
