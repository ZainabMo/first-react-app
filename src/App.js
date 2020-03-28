import React from 'react';
import { ChatIcon } from '@patternfly/react-icons';
import "@patternfly/react-core/dist/styles/base.css";
import {
  Brand,
  Button,
  Card,
  CardActions,
  CardHead,
  CardHeader,
  CardBody,
  CardFooter,
  Split,
  SplitItem,
  Text,
  Alert,
  TextContent,
  TextVariants
} from '@patternfly/react-core';
import {
  TimesIcon
} from '@patternfly/react-icons';

function App() {
  return (
    <Card>
      <CardHead>
        <Brand src="https://i.pinimg.com/600x315/84/82/4e/84824ec2eb0a4c8ec9a9dc02c2abfed1.jpg" alt="Chat Logo" />
        <CardActions>
          <Button variant="Warning">
            <ChatIcon />
          </Button>
        </CardActions>
      </CardHead>
      <CardHeader>
      
      <Text component={TextVariants.h1}>
      Welcome
        <TextContent>
      <Text component={TextVariants.small}> Do not read this
      </Text>
      </TextContent>
      </Text>
      </CardHeader>
      <CardBody>
        Test Page
        <Alert key={3} variant='info'>
        Something has happened!
        </Alert>
      </CardBody>
      <CardFooter>
      <Split gutter="md">
        <SplitItem>
        <Button variant="danger" isInline>Do not click</Button>
        </SplitItem>
        <SplitItem>
        <Button variant="primary" isInline>Continue</Button>
        </SplitItem>
      </Split>
      </CardFooter>
    </Card>
  );
}

export default App;
