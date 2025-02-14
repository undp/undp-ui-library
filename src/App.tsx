import {
  CheckboxGroup,
  CheckboxGroupItem,
} from './components/ui/checkbox-group';

function App() {
  return (
    <CheckboxGroup onChange={d => console.log(d)} label='hello'>
      <CheckboxGroupItem value='2xl' />
      <CheckboxGroupItem value='3xl' />
      <CheckboxGroupItem value='4xl' />
    </CheckboxGroup>
  );
}

export default App;

/*

      <Card variant='without-image' size='xs' backgroundColor='gray'>
        <CardHeader>
          <CardTag>Hello world</CardTag>
          <CardImage src='https://plus.unsplash.com/premium_photo-1738857914575-3d3b2fb7064e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          <CardTitle>Hello world</CardTitle>
          <CardDescription>
            Hello world Hello world Hello worldHello worldHello world Hello
            world
          </CardDescription>
        </CardHeader>
        <CardFooter>
          Hello world Hello world Hello worldHello worldHello world Hello world
        </CardFooter>
      </Card>
      <PageWideCard>
        <PageWideCardTag>Hello world</PageWideCardTag>
        <PageWideCardContainer>
          <PagWideCardImage
            className='h-96'
            src='https://plus.unsplash.com/premium_photo-1738857914575-3d3b2fb7064e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <PageWideCardContent>
            <PageWideCardHeader>
              <PageWideCardTitle>Hello world</PageWideCardTitle>
              <PageWideCardDescription>
                Hello world Hello world Hello worldHello worldHello world Hello
                world
              </PageWideCardDescription>
            </PageWideCardHeader>
            <PageWideCardFooter>
              Hello world Hello world Hello worldHello worldHello world Hello
              world
            </PageWideCardFooter>
          </PageWideCardContent>
        </PageWideCardContainer>
      </PageWideCard>
      <H1>Helo wolrd</H1>
      <H2>Helo wolrd</H2>
      <H3>Helo wolrd</H3>
      <H4>Helo wolrd</H4>
      <H5>Helo wolrd</H5>
      <H6>Helo wolrd</H6>
      <A href='./' variant='dark'>
        visit link
      </A>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/components'>Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <SdgBorder barClassName='h-1' />
      <Spinner />
      <Input placeholder='hello worl' type='date' />
      <Badge variant='azure'>Badge</Badge>
      <Stepper
        steps={[{ title: 'hello' }, { title: 'hello' }, { title: 'hello' }]}
        currentStep={2}
      />
      <Footer>
        <FooterLogoUnit />
        <FooterCopyrightUnit />
      </Footer>
      <Textarea />
      <HoverCard>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <P>Add to library</P>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <SliderUI />
      <Modal
        open={modal}
        onOpenChange={() => {
          setModal(false);
        }}
      >
        Hello world
      </Modal>
      */
