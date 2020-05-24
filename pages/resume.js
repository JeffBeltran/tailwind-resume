import { BasePage, Card, TextBlock } from "../components";
import { useRouter } from "next/router";

export default function Resume() {
  const router = useRouter();

  return (
    <>
      <BasePage pageTitle="Resume" activeUrl={router.pathname}>
        <div className="flex flex-col space-y-8">
          <Card heading="Summary">
            <TextBlock>
              Full-stack developer with 10 years of professional experience
              developing and maintaining web-based applications. Conducts
              ongoing analysis of the organization's IT infrastructure to
              determine product compatibility and solutions. Skilled mentor,
              trainer, and project leader; able to direct multiple tasks
              effectively and readily master innovative software and tools.
              Familiarity with Cloud computing concepts, hosting, and databases.
            </TextBlock>
          </Card>
          <Card heading="Relevant Proficiencies">
            <TextBlock>
              Massa per inceptos molestie varius condimentum habitasse nam duis
              lacinia, sociis magnis ut iaculis nostra semper tempus cubilia
              penatibus, curae primis ad pretium tortor faucibus litora
              curabitur. Lobortis proin mollis phasellus tempor nisi cubilia
              molestie, lacinia sagittis natoque odio accumsan consectetur,
              commodo aptent facilisi morbi libero ultricies. Imperdiet donec
              suscipit odio magnis ante velit dictum sollicitudin, bibendum
              aliquet nunc auctor lobortis dui placerat vivamus, fusce mauris
              phasellus convallis et proin pharetra.
            </TextBlock>
          </Card>
          <Card heading="Professional Experience">
            <TextBlock>
              Massa per inceptos molestie varius condimentum habitasse nam duis
              lacinia, sociis magnis ut iaculis nostra semper tempus cubilia
              penatibus, curae primis ad pretium tortor faucibus litora
              curabitur. Lobortis proin mollis phasellus tempor nisi cubilia
              molestie, lacinia sagittis natoque odio accumsan consectetur,
              commodo aptent facilisi morbi libero ultricies. Imperdiet donec
              suscipit odio magnis ante velit dictum sollicitudin, bibendum
              aliquet nunc auctor lobortis dui placerat vivamus, fusce mauris
              phasellus convallis et proin pharetra.
            </TextBlock>
          </Card>
          <Card heading="Education">
            <TextBlock>
              Massa per inceptos molestie varius condimentum habitasse nam duis
              lacinia, sociis magnis ut iaculis nostra semper tempus cubilia
              penatibus, curae primis ad pretium tortor faucibus litora
              curabitur. Lobortis proin mollis phasellus tempor nisi cubilia
              molestie, lacinia sagittis natoque odio accumsan consectetur,
              commodo aptent facilisi morbi libero ultricies. Imperdiet donec
              suscipit odio magnis ante velit dictum sollicitudin, bibendum
              aliquet nunc auctor lobortis dui placerat vivamus, fusce mauris
              phasellus convallis et proin pharetra.
            </TextBlock>
          </Card>
          <Card heading="Relevant Side Project">
            <TextBlock>
              Massa per inceptos molestie varius condimentum habitasse nam duis
              lacinia, sociis magnis ut iaculis nostra semper tempus cubilia
              penatibus, curae primis ad pretium tortor faucibus litora
              curabitur. Lobortis proin mollis phasellus tempor nisi cubilia
              molestie, lacinia sagittis natoque odio accumsan consectetur,
              commodo aptent facilisi morbi libero ultricies. Imperdiet donec
              suscipit odio magnis ante velit dictum sollicitudin, bibendum
              aliquet nunc auctor lobortis dui placerat vivamus, fusce mauris
              phasellus convallis et proin pharetra.
            </TextBlock>
          </Card>
        </div>
      </BasePage>
    </>
  );
}
