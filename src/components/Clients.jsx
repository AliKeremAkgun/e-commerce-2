import hooli from "../assets/hooli.png";
import lyft from "../assets/lyft.png";
import bird from "../assets/bird.png";
import stripe from "../assets/stripe.png";
import aws from "../assets/aws.png";
import reddit from "../assets/reddit.png";

export default function Clients() {
  return (
    <section className="w-full py-12 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 place-items-center">
          <img src={hooli} alt="Hooli" className="h-8 object-contain" />
          <img src={lyft} alt="Lyft" className="h-8 object-contain" />
          <img src={bird} alt="Bird" className="h-8 object-contain" />
          <img src={stripe} alt="Stripe" className="h-8 object-contain" />
          <img src={aws} alt="AWS" className="h-8 object-contain" />
          <img src={reddit} alt="Reddit" className="h-8 object-contain" />
        </div>
      </div>
    </section>
  );
}