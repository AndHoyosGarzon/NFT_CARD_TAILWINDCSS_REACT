const Card = () => {
  return (
    <div
      className="bg-Very-dark-blue-card-BG max-w-[360px] max-h-auto rounded-xl p-8 border-[0.2px] border-Very-dark-blue-line shadow-[0_35px_35px_rgba(0,0,0,0.3)]
     "
    >
      <img
        className="w-[340px] h-[300px] rounded-lg mb-6"
        src="/images/imageEquilibrium.jpg"
        alt="image_card"
      />

      <div>
        <div>
          <h1 className="text-White font-Outfit font-semibold text-Paragraph mb-4">
            Equilibrium #3429
          </h1>
          <p className="mb-4 text-Soft-blue text-sm">
            Our Equilibrium collection promotes balance and calm.
          </p>

          <div className="flex justify-between mb-6  ">
            <p className=" text-Cyan font-semibold flex items-center">
              <img
                className="w-[15px] h-[15px]"
                src="/images/icon-ethereum.svg"
                alt="clock"
              />
              <span className="ml-1">0.041ETH</span>
            </p>
            <p className="text-Soft-blue flex items-center">
              <img
                className="w-[15px] h-[15px]"
                src="/images/icon-clock.svg"
                alt="clock"
              />
              <span className="ml-1">3 days left</span>
            </p>
          </div>
        </div>

        <hr className="text-Soft-blue mb-4" />

        <div className="flex  items-center">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden mr-4">
            <img src="/images/image-avatar.png" alt="avatar" />
          </div>
          <p className="text-sm">
            <span className="text-Soft-blue">Creation of </span>
            <span className="text-White"> Andres Hoyos</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
