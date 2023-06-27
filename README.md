## Amazon IVS Broadcast Web Demo With Snap Camera Kit=

A demo web application intended as an educational tool to demonstrate how you can build a browser-based streaming tool with the [Amazon IVS Web Broadcast SDK](https://aws.github.io/amazon-ivs-web-broadcast/docs/sdk-guides/introduction) and add Snap AR filters using the Snap Camera Kit Web SDK.

**Demo:** Visit [https://snap.ivsdemos.com/](https://snap.ivsdemos.com/) and add your channel's `ingest endpoint` and `stream key` on the settings screen.

<img src="![Alt text](amazon-ivs-web-broadcast-snap.png)" alt="A web browser showing the demo application with a Snap Lens applied to a man's face." />

**This project is intended for education purposes only and not for production usage.**

## Prerequisites

- [NodeJS](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/getting-started/install) package manager
- Your IVS Channel details. A guide is available here: [Getting started with Amazon IVS](https://docs.aws.amazon.com/ivs/latest/userguide/getting-started.html).

## Running the demo

Follow these instructions to run the demo:

1. Create a `.env.local` file in the project root directory and add your Lens Group ID and Snap Camera Kit API Token

```
NEXT_PUBLIC_SNAP_CAMERA_KIT_API_TOKEN=
NEXT_PUBLIC_LENS_GROUP_ID=
```

2. Run: `yarn install`
3. Run: `yarn run dev`

## Known issues and limitations

- The application is meant for demonstration purposes and **not** for production use.
- This application is only tested and supported on the latest Desktop versions of Chrome and Firefox. Other browsers and devices, including mobile browsers and smartphones, may work with this tool, but are not officially supported at this time.

## About Amazon IVS

Amazon Interactive Video Service (Amazon IVS) is a managed live streaming and stream chat solution that is quick and easy to set up, and ideal for creating interactive video experiences. [Learn more](https://aws.amazon.com/ivs/).

- [Amazon IVS docs](https://docs.aws.amazon.com/ivs/)
- [User Guide](https://docs.aws.amazon.com/ivs/latest/userguide/)
- [API Reference](https://docs.aws.amazon.com/ivs/latest/APIReference/)
- [Setting Up for Streaming with Amazon Interactive Video Service](https://aws.amazon.com/blogs/media/setting-up-for-streaming-with-amazon-ivs/)
- [Learn more about Amazon IVS on IVS.rocks](https://ivs.rocks/)
- [View more demos like this](https://ivs.rocks/examples)

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
