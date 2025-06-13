import PetSafetyGrid from "~/components/PetSafetyGrid";
import PotionControl from "~/components/PotionControl";
import SmartPetBowlShowcase from "~/components/SmartPetBowlShowcase";
import FrequentlyBoughtTogether from "~/components/FrequentlyBoughtTogether"
import WaggleSteps from "~/components/WaggleSteps"
import TestimonialsSection from "~/components/TestimonialsSection"
import FAQsection from "~/components/FAQsection"

export default function CustomPage() {
    return (
        <div>
            <PotionControl />
            <SmartPetBowlShowcase />
            <FrequentlyBoughtTogether />
            <WaggleSteps />
            <TestimonialsSection />
            <FAQsection />
            <PetSafetyGrid/>
        </div>  
    );
}
