import RecommendItem from "./RecommendItem";

const RecommendList = (recommends) => {
// console.log(recommends?.recommends);
  return (
    <>
        <ul className={`${recommends?.className} flex gap-5`}>
          {recommends?.recommends?.map((item) => (
            <RecommendItem key={item._id} recommend={item} />
          ))}
        </ul>
    </>
  );
};
export default RecommendList;
