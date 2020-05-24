import { BasePage } from "../components";
import { useRouter } from "next/router";

export default function CoverLetter() {
  const router = useRouter();

  return (
    <>
      <BasePage pageTitle="Cover Letter" activeUrl={router.pathname}>
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-gray-200 border-dashed rounded-lg h-96">
            Pellentesque purus aptent quisque arcu laoreet adipiscing senectus,
            tempus donec condimentum potenti justo mattis sit, posuere malesuada
            quam natoque turpis sollicitudin.
          </div>
        </div>
      </BasePage>
    </>
  );
}
