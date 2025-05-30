## yba alert maintenance-window delete

Delete a YugabyteDB Anywhere maintenance window

### Synopsis

Delete a YugabyteDB Anywhere maintenance window

```
yba alert maintenance-window delete [flags]
```

### Examples

```
yba alert maintenance-window delete --uuid <maintenance-window-uuid>
```

### Options

```
  -u, --uuid string   [Required] UUID of the maintenance window.
  -f, --force         [Optional] Bypass the prompt for non-interactive usage.
  -h, --help          help for delete
```

### Options inherited from parent commands

```
  -a, --apiToken string    YugabyteDB Anywhere api token.
      --config string      Config file, defaults to $HOME/.yba-cli.yaml
      --debug              Use debug mode, same as --logLevel debug.
      --disable-color      Disable colors in output. (default false)
  -H, --host string        YugabyteDB Anywhere Host (default "http://localhost:9000")
  -l, --logLevel string    Select the desired log level format. Allowed values: debug, info, warn, error, fatal. (default "info")
  -o, --output string      Select the desired output format. Allowed values: table, json, pretty. (default "table")
      --timeout duration   Wait command timeout, example: 5m, 1h. (default 168h0m0s)
      --wait               Wait until the task is completed, otherwise it will exit immediately. (default true)
```

### SEE ALSO

* [yba alert maintenance-window](yba_alert_maintenance-window.md)	 - Manage YugabyteDB Anywhere maintenance window

