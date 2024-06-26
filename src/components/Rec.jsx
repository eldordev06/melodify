/* eslint-disable react/prop-types */
import RecItem from "./RecItem";

export default function Rec({ heading }) {
  return (
    <section className="pt-[30px]">
      <h2 className="text-3xl mb-7">{heading}</h2>
      <div className="flex flex-wrap gap-[30px]">
        <RecItem
          imgPath="/images/red-bg-girl.png"
          altTxt="Girl looking to right on the red background"
          name="Weekly Motivation dose"
          author="Ben Ina Scott"
        />
        <RecItem
          imgPath="/images/red-bg-girl.png"
          altTxt="Girl looking to right on the red background"
          name="MEDITATION SELF"
          author="Ibn Hussain Aleen"
        />
        <RecItem
          imgPath="/images/red-bg-girl.png"
          altTxt="Girl looking to right on the red background"
          name="Words beyond action"
          author="Samuel Scott"
        />
        <RecItem
          imgPath="/images/red-bg-girl.png"
          altTxt="Girl looking to right on the red background"
          name="The Alexa Show"
          author="Adriana Tom"
        />
        <RecItem
          imgPath="/images/red-bg-girl.png"
          altTxt="Girl looking to right on the red background"
          name="The Stories of Madness"
          author="Lexus"
        />
        <RecItem
          imgPath="/images/red-bg-girl.png"
          altTxt="Girl looking to right on the red background"
          name="Motivation Daily bust"
          author="Georgina Martha"
        />
        <RecItem
          imgPath="/images/red-bg-girl.png"
          altTxt="Girl looking to right on the red background"
          name="Words beyond action"
          author="Samuel Scott"
        />
        <RecItem
          imgPath="/images/red-bg-girl.png"
          altTxt="Girl looking to right on the red background"
          name="The Alexa Show"
          author="Adriana Tom"
        />
        <RecItem
          imgPath="/images/red-bg-girl.png"
          altTxt="Girl looking to right on the red background"
          name="The Stories of Madness"
          author="Lexus"
        />
        <RecItem
          imgPath="/images/red-bg-girl.png"
          altTxt="Girl looking to right on the red background"
          name="Motivation Daily bust"
          author="Georgina Martha"
        />
      </div>
    </section>
  );
}
