export function onDownloadSLA(event: { preventDefault(): void }): void {
  event.preventDefault();
  window.alert("Downloading Service Level Agreement (SLA) PDF...");
}
