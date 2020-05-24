import { BasePage } from "../components";
import { useRouter } from "next/router";

export default function CoverLetter() {
  const router = useRouter();

  return (
    <>
      <BasePage pageTitle="Cover Letter" activeUrl={router.pathname}>
        <div className="px-4 py-8 sm:px-0">
          <div className="p-8 space-y-6 text-xl antialiased leading-relaxed tracking-wide text-teal-900 rounded-lg shadow bg-gray-50">
            <p>Hey there Adam and Steve,</p>
            <p>
              Rutrum donec dictum est tincidunt congue taciti, mattis facilisis
              ad egestas euismod odio mi, sociis aenean dignissim sagittis
              gravida. Suspendisse cubilia arcu egestas pretium semper montes
              facilisis accumsan neque curae, cras vitae auctor molestie rhoncus
              hendrerit massa consequat tortor, suscipit sed amet pharetra
              eleifend sapien himenaeos nec praesent. Pulvinar pellentesque
              viverra sociosqu volutpat convallis tempus sagittis torquent,
              tellus auctor natoque urna bibendum condimentum ipsum vel tempor,
              dignissim ornare in potenti mollis taciti aptent. Luctus faucibus
              mus sed ullamcorper neque donec magna sit, hac dolor fermentum
              adipiscing dapibus diam est, fringilla rutrum ultrices proin
              consequat eleifend ornare. Lacinia lacus neque sociis hac vehicula
              at volutpat augue, vivamus ante a urna pulvinar malesuada posuere
              est, odio accumsan fusce sodales tincidunt ultricies eros. Rutrum
              nascetur nisi tellus aenean aptent a montes ligula fringilla
              himenaeos, vulputate vestibulum id tortor commodo ante nibh
              praesent. Condimentum vitae orci dolor ultricies praesent feugiat
              parturient sodales sagittis, elementum semper eros pretium egestas
              erat aptent nibh nunc, sociis tempor aenean nostra cursus cum
              penatibus netus. Dolor interdum porta venenatis lectus taciti
              potenti molestie pellentesque, quam scelerisque habitasse augue
              leo nibh tristique.
            </p>
            <p>
              Amet laoreet facilisis feugiat mollis sociis hac, placerat primis
              inceptos tortor bibendum porttitor, luctus ad condimentum vivamus
              sem dapibus, tempus parturient nostra maecenas ac. Dapibus
              convallis natoque dolor nulla conubia enim felis, tempus senectus
              in nisl turpis blandit proin dictumst, primis eu fames rhoncus
              molestie ultrices. Condimentum sociosqu nunc magna aenean quam
              enim ut quisque tortor, metus etiam urna non eget gravida netus
              massa, odio amet mi et dictum nisl ornare arcu. Proin nullam
              natoque dapibus pretium primis magna suscipit cras, nisi ultricies
              et mattis ante elementum eget, nec varius tortor gravida phasellus
              libero himenaeos. Pretium ultrices condimentum cum eget quisque
              orci gravida dictumst, sociosqu tortor amet fermentum vivamus
              magna torquent et, id eleifend luctus curabitur dictum primis
              lectus. Egestas dictumst felis tempor condimentum vulputate primis
              mattis ac ornare, laoreet nam aptent at feugiat senectus himenaeos
              dapibus libero, sit risus vehicula vitae nostra dictum fames
              maecenas.
            </p>
            <p>Cheers,</p>
            <p className="text-4xl font-handwriting">Jeff</p>
          </div>
        </div>
      </BasePage>
    </>
  );
}
