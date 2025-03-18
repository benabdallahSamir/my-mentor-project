import loadingPage from "../../asset/loadingPage.svg";
function LoadingPage() {
  return (
    <div className="w-screen h-screen flex">
      <img src={loadingPage} className="h-[60vh] m-auto" />
    </div>
  );
}

export default LoadingPage;
