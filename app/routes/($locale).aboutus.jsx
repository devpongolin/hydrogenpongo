import { ImageOff } from "lucide-react";
import MeetStails from "~/components/MeetStails";
import WaggleForGood from "~/components/WaggleForGood";
import TailwaggingApproved from "~/components/TailwaggingApproved";
import CertifiedToCare from "~/components/CertiFiedToCare";
import PetParents from "~/components/PetParents";

export default function CustomPage() {
  return (
    <div>
      <PetParents />
      <MeetStails />
      <div className="bg-custom-gradient ">
      <WaggleForGood />
      <TailwaggingApproved />
      <CertifiedToCare />
      </div>
    </div>
  );
}
