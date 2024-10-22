import { USER_INFO } from "./constants/user-info";
import { Icons } from "./components/icons";
import { Section } from "./components/section";

function App() {
  return (
    <>
      <header className="w-full h-12 fixed items-center justify-start px-2 flex text-gray-200 bg-slate-700">
        <h4>Carlos Rodrigues</h4>
      </header>
      <div className="flex min-h-lvh bg-slate-600 flex-col items-center justify-center">
        <main className="min-w-40">
          <Section>
            <Icons.IconLinkedIn />
            <a href={USER_INFO.linkedIn} target="_blank">
              LinkedIn
            </a>
          </Section>
          <Section>
            <Icons.IconGithub />
            <a href={USER_INFO.github} target="_blank">
              GitHub
            </a>
          </Section>
          <Section>
            <Icons.IconMail />
            <a href={"mailto:" + USER_INFO.mail} type="email" target="_blank">
              Mail
            </a>
          </Section>
        </main>
      </div>
    </>
  );
}

export default App;
