import Layout from "./components/Layout/Layout";
import Rec from "./components/Rec";
import RecItem from "./components/RecItem";

function App() {
  return (
    <>
      <Layout>
        <main className="flex-grow relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-auto px-10 pb-10">
            <Rec heading="Good morning" />
            <section className="pt-[50px]">
              <h2 className="text-3xl mb-7">Shows you might like</h2>
              <div className="flex flex-wrap gap-[30px]">
                <RecItem
                  imgPath="/public/images/red-bg-girl.png"
                  altTxt="Girl looking to right on the red background"
                  name="Weekly Motivation dose"
                  author="Ben Ina Scott"
                />
                <RecItem
                  imgPath="/public/images/red-bg-girl.png"
                  altTxt="Girl looking to right on the red background"
                  name="MEDITATION SELF"
                  author="Ibn Hussain Aleen"
                />
                <RecItem
                  imgPath="/public/images/red-bg-girl.png"
                  altTxt="Girl looking to right on the red background"
                  name="Words beyond action"
                  author="Samuel Scott"
                />
                <RecItem
                  imgPath="/public/images/red-bg-girl.png"
                  altTxt="Girl looking to right on the red background"
                  name="The Alexa Show"
                  author="Adriana Tom"
                />
                <RecItem
                  imgPath="/public/images/red-bg-girl.png"
                  altTxt="Girl looking to right on the red background"
                  name="The Stories of Madness"
                  author="Lexus"
                />
                <RecItem
                  imgPath="/public/images/red-bg-girl.png"
                  altTxt="Girl looking to right on the red background"
                  name="Motivation Daily bust"
                  author="Georgina Martha"
                />
                <RecItem
                  imgPath="/public/images/red-bg-girl.png"
                  altTxt="Girl looking to right on the red background"
                  name="Words beyond action"
                  author="Samuel Scott"
                />
                <RecItem
                  imgPath="/public/images/red-bg-girl.png"
                  altTxt="Girl looking to right on the red background"
                  name="The Alexa Show"
                  author="Adriana Tom"
                />
                <RecItem
                  imgPath="/public/images/red-bg-girl.png"
                  altTxt="Girl looking to right on the red background"
                  name="The Stories of Madness"
                  author="Lexus"
                />
                <RecItem
                  imgPath="/public/images/red-bg-girl.png"
                  altTxt="Girl looking to right on the red background"
                  name="Motivation Daily bust"
                  author="Georgina Martha"
                />
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default App;
