import { LangProvider } from "./components/LangContext";
import Site from "./components/Site";

export default function Home() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  );
}
