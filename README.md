# Blackout Check

## Description

Made using [Nest](https://github.com/nestjs/nest)

The purpose of this repo is to have a palce to check when a power outage or internet outage happen at home.

## Pending TODOs

- [] In case of blackout at the designed hour,(PENDING) what should I do?
- [] Create records of each blackout
``` TS
{
    id: uuid // JFF
    duration: number
    whenStarts: Date
    whenEnds: Date
}
```

---

- [] Dockerize
- [] Get into casaOS workshop

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

## Stay in touch

- Author - [Jose Cavazos](mailto://jgcavazos96@hotmail.com)

## License

== None ==
