'use client';

const TutorialSection = () => {
  return (
    <div className="">
      <div className="drop-shadow-sm space-y-6 md:space-y-0 md:flex md:justify-around mb-12 text-center text-lg">
        Êtes-vous intéressé par nous rejoindre dans cette aventure ?<br />
        Il suffit de faire le test de sélection et remplir le formulaire ci-dessous!
      </div>

      <div
        className="flex justify-center p-8 rounded-lg animate-fade-up opacity-0"
        style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
      >
        <button
          className="p-[3px] relative"
          onClick={() =>
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSfs_oMdgCFvflJxU8j3iA_Va0t5wNKUkqllMusHqfDiTFcD4g/viewform?usp=send_form',
              '_blank'
            )
          }
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-[#272162] rounded-lg" />
          <div className="px-16 py-8 bg-blue rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent hover:text-white">
            Candidater !
          </div>
        </button>
      </div>
    </div>
  );
};

export default TutorialSection;
