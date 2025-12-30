"use client";
import { Box } from "@/components/ui/Box";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Stack } from "@/components/ui/Stack";
import { Table } from "@/components/ui/Table";
import { Text } from "@/components/ui/Text";
import { useState } from "react";

export default function CsvUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = () => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      const text = String(e.target?.result);
      const lines = text.split("\n").filter(Boolean);
      const headers = lines[0].split(",");
      const rows = lines.slice(1).map(l => {
        const values = l.split(",");
        return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
      });
      setColumns(headers);
      setData(rows);
      setUploaded(true);
    };
    reader.readAsText(file);
  };

  return (
    <Box padding="lg" className="max-w-5xl mx-auto">
      <Stack gap="lg">
        <Stack direction="horizontal" className="w-full flex justify-between">
          <Stack gap="xs">
            <Text size="xl" weight="bold">Import Billing Data</Text>
            <Text tone="muted">Upload a CSV file to import invoice or billing information.</Text>
          </Stack>
          <Button
            variant="secondary"
            onClick={() => window.location.href = "/showcase"}
          >
            View Components
          </Button>
        </Stack>

        <Card>
          <Stack gap="md">
            <input type="file" accept=".csv" onChange={e => setFile(e.target.files?.[0] || null)} />
            {file && <Text size="sm">Selected: {file.name}</Text>}
            <Button onClick={handleUpload} disabled={!file}>Upload</Button>
          </Stack>
        </Card>

        {uploaded && (
          <Table title={file?.name} columns={columns} data={data} />
        )}
      </Stack>
    </Box>
  );
}
