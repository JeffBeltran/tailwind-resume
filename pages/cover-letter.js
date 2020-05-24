import { BasePage, Card, TextBlock } from "../components";
import { useRouter } from "next/router";

export default function CoverLetter() {
  const router = useRouter();

  return (
    <BasePage pageTitle="Cover Letter" activeUrl={router.pathname}>
      <Card>
        <div className="space-y-6">
          <TextBlock>Hey there Adam and Steve,</TextBlock>
          <TextBlock>
            Massa per inceptos molestie varius condimentum habitasse nam duis
            lacinia, sociis magnis ut iaculis nostra semper tempus cubilia
            penatibus, curae primis ad pretium tortor faucibus litora curabitur.
            Lobortis proin mollis phasellus tempor nisi cubilia molestie,
            lacinia sagittis natoque odio{" "}
            <span className="font-bold">foo bar</span> accumsan consectetur,
            commodo aptent facilisi morbi libero ultricies. Imperdiet donec
            suscipit odio magnis ante velit dictum sollicitudin, bibendum
            aliquet nunc auctor lobortis dui placerat vivamus, fusce mauris
            phasellus convallis et proin pharetra.
          </TextBlock>
          <TextBlock>Cheers,</TextBlock>
          <p className="text-4xl font-handwriting">Jeff</p>
        </div>
      </Card>
    </BasePage>
  );
}
