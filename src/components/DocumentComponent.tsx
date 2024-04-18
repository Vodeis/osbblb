import text from "../text/text.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Document {
  name: string;
  type: string;
  href: string;
  links?: { href: string; name: string }[];
}

const DocumentComponent: React.FC = () => {
  const params: { id?: string } = useParams();
  const [docData, setDocData] = useState<Document | null>(null);

  useEffect(() => {
    const getDocument = () => {
      const document = text.documents.find(
        (item) => item.href.split("/").slice(-1)[0] === params.id
      );
      if (document) {
        setDocData(document as Document);
      }
    };

    if (params.id) {
      getDocument();
    }
  }, [params.id]);

  return (
    <article className="w-full h-full">
      {docData && (
        <>
          <h1 className="text-center text-2xl font-bold">{docData.name}</h1>
          {docData.type === "pdf" && (
            <object
              type="application/pdf"
              className="pdf w-full h-full"
              data={`/docs/${params.id}.pdf#page=1&amp;zoom=100&amp;view=fitH,100&amp;scrollbar=0&amp;toolbar=0&amp;statusbar=0&amp;navpanes=0`}
            >
              <p>PDF cannot be displayed.</p>
            </object>
          )}
          {docData.links && (
            <ul className="list-disc">
              {docData.links.map(({ href, name }, idx) => (
                <li key={idx}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </article>
  );
};

export default DocumentComponent;
