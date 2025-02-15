import { GrapeIcon } from 'lucide-react';
import {
  Banner,
  BannerBody,
  BannerBodyContent,
  BannerBodySidebar,
} from './components/ui/banner';
import { H1, P } from './components/ui/typography';
import {
  VisualizationWidget,
  VisualizationWidgetHeader,
  VisualizationWidgetHeaderItem,
  VisualizationWidgetBody,
  VisualizationWidgetBodySidebar,
  VisualizationWidgetBodyContent,
} from './components/ui/visualization-widget';
import { Pagination } from './components/ui/Pagination';

function App() {
  return (
    <>
      <Pagination
        total={100}
        pageSize={10}
        onChange={d => {
          console.log(d);
        }}
      />
      <VisualizationWidget>
        <VisualizationWidgetHeader
          onChange={d => {
            console.log(d);
          }}
          defaultValue='world'
        >
          <VisualizationWidgetHeaderItem value='world'>
            <GrapeIcon />
            Hello wolrd
          </VisualizationWidgetHeaderItem>
          <VisualizationWidgetHeaderItem value='hallo'>
            Hello wolrd
          </VisualizationWidgetHeaderItem>
          <VisualizationWidgetHeaderItem value='hd'>
            Hello wolrd
          </VisualizationWidgetHeaderItem>
        </VisualizationWidgetHeader>
        <VisualizationWidgetBody>
          <VisualizationWidgetBodySidebar>
            <div className='h-[2000px] bg-primary-blue-100' />
          </VisualizationWidgetBodySidebar>
          <VisualizationWidgetBodyContent>
            <div className='h-96 bg-primary-gray-300 w-full' />
          </VisualizationWidgetBodyContent>
        </VisualizationWidgetBody>
      </VisualizationWidget>
      <Banner backgroundColor='yellow'>
        <BannerBody maxWidth='lg'>
          <BannerBodySidebar>
            <H1>Hello world</H1>
          </BannerBodySidebar>
          <BannerBodyContent>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vel lacus eget ligula congue maximus. Integer sit amet posuere
              leo. In tincidunt ultricies viverra. Curabitur ac tincidunt
              turpis, et lacinia velit. Praesent a felis dolor. Aliquam vehicula
              efficitur mauris, sed lobortis dolor porta eget. Curabitur
              sollicitudin lectus et massa elementum, in sollicitudin elit
              rhoncus. Aenean lorem ante, auctor at libero nec, congue aliquet
              nunc. Suspendisse sed diam at dui tristique hendrerit sed ac diam.
              Aliquam feugiat ultrices aliquet. Cras quis sodales lacus.
              Praesent et facilisis lectus. Nam turpis magna, pulvinar vel erat
              vel, interdum dapibus velit. Pellentesque eleifend ligula
              fringilla gravida fringilla. Quisque commodo lacus facilisis
              varius faucibus. Etiam non tellus condimentum, tincidunt urna ut,
              fringilla libero. Cras pulvinar nisi justo, a blandit ligula
              blandit non. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Phasellus vulputate varius
              risus eu egestas. Integer metus massa, suscipit nec risus ac,
              pulvinar accumsan ante. Aenean ornare est non neque venenatis, ac
              scelerisque mi ultricies.
            </P>
          </BannerBodyContent>
        </BannerBody>
      </Banner>
    </>
  );
}

export default App;

/*
      <VisualizationWidget>
        <VisualizationWidgetHeader
          onChange={d => {
            console.log(d);
          }}
          defaultValue='world'
        >
          <VisualizationWidgetHeaderItem value='world'>
            <GrapeIcon />
            Hello wolrd
          </VisualizationWidgetHeaderItem>
          <VisualizationWidgetHeaderItem value='hallo'>
            Hello wolrd
          </VisualizationWidgetHeaderItem>
          <VisualizationWidgetHeaderItem value='hd'>
            Hello wolrd
          </VisualizationWidgetHeaderItem>
        </VisualizationWidgetHeader>
        <VisualizationWidgetBody>
          <VisualizationWidgetBodySidebar>
            <div className='h-[2000px] bg-primary-blue-100' />
          </VisualizationWidgetBodySidebar>
          <VisualizationWidgetBodyContent>
            <div className='h-96 bg-primary-gray-300 w-full' />
          </VisualizationWidgetBodyContent>
        </VisualizationWidgetBody>
      </VisualizationWidget>
      <Sidebar
        onChange={d => console.log(d)}
        defaultValue='2xl'
        activeItemClass='bg-primary-blue-200'
        hoverItemClass='bg-primary-gray-600'
      >
        <SidebarItem value='xl'>Hello World</SidebarItem>
        <SidebarItem value='2xl'>Hello World</SidebarItem>
        <SidebarItem value='3xl'>Hello World</SidebarItem>
      </Sidebar>

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
