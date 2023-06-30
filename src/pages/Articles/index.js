import React from "react";
import Section from "../../assets/jss/section";
import { StyledTitle, Title } from "../../components/Typography";
import { GridCol, GridContainer } from "../../assets/jss/Flexgrid";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import axios from "axios";

export default function Experience() {
  const articleUrl = [
    "https://www.smashingmagazine.com/2021/10/optimizing-nextjs-applications-nx/",
    "https://adevait.com/react/building-crud-app-with-react-js-supabase",
    "https://blog.openreplay.com/decentralized-app-with-vuejs-and-tezos/",
    "https://blog.openreplay.com/connecting-a-react-app-to-the-near-blockchain/",
    "https://blog.openreplay.com/pyscript-python-on-the-web/",
    "https://blog.openreplay.com/html-form-validation-with-pristinejs/",
    "https://buttercms.com/blog/express-js-error-handling/",
    "https://code.pieces.app/blog/scheduled-execution-in-express-using-cron-jobs",
    "https://code.pieces.app/blog/react-form-validation-formik-yup",
    "https://code.pieces.app/blog/getting-started-with-semantic-html",
    "https://code.pieces.app/blog/react-themes-with-styled-components",
    "https://code.pieces.app/blog/react-typescript-state-management-easy-peasy",
    "https://code.pieces.app/blog/building-a-fullstack-application-with-next-js-and-mongodb",
    "https://code.pieces.app/blog/serverside-rendering-with-express-and-ejs-templates",
    "https://bejamas.io/discovery/serverless-database/supabase/"
  ];

  const getLinkPreview = async (url) => {
    const response = await axios(`https://link-preview-ijss.onrender.com/metadata?url=${url}`);
    console.log(response.data);
    return response.data;
  };

  return (
    <Section padding="lg">
      <StyledTitle mb={20}>Technical Contents</StyledTitle>
      <Title mb={80} size="md">
        My Articles
      </Title>

      <GridContainer style={{rowGap: 20}} >
        {articleUrl.reverse().map((val) => (
          <GridCol md={6} xl={4}>
            <LinkPreview className="link-preview-component" url={val} fetcher={getLinkPreview} descriptionLength={100} height="100%" />
          </GridCol>
        ))}
      </GridContainer>
    </Section>
  );
}
