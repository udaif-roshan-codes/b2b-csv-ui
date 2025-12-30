"use client";

import { Box } from "@/components/ui/Box";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Table } from "@/components/ui/Table";

const sampleColumns = ["Name", "Plan", "Amount", "Status"];
const sampleData = [
  { Name: "Acme Corp", Plan: "Pro", Amount: "$120", Status: "Paid" },
  { Name: "Beta Ltd", Plan: "Starter", Amount: "$40", Status: "Pending" },
];

export default function ShowcasePage() {
  return (
    <Box padding="lg" className="max-w-6xl mx-auto px-4">
      <Stack gap="lg">
        <Text size="xl" weight="bold">Component Showcase</Text>

        {/* Text */}
        <Card>
          <Stack gap="sm">
            <Text weight="bold">Text</Text>
            <Text size="sm">Small text</Text>
            <Text>Base text</Text>
            <Text size="lg">Large text</Text>
            <Text tone="muted">Muted text</Text>
          </Stack>
        </Card>

        {/* Buttons */}
        <Card>
          <Stack gap="sm">
            <Text weight="bold">Buttons</Text>
            <Stack direction="horizontal" gap="sm" className="flex-wrap">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button disabled>Disabled</Button>
            </Stack>
          </Stack>
        </Card>

        {/* Layout */}
        <Card>
          <Stack gap="sm">
            <Text weight="bold">Box & Stack Layout</Text>
            <Stack direction="horizontal" gap="sm" className="flex-wrap">
              <Box border="default" className="w-40 text-center">Box 1</Box>
              <Box border="default" className="w-40 text-center">Box 2</Box>
              <Box border="default" className="w-40 text-center">Box 3</Box>
            </Stack>
          </Stack>
        </Card>

        {/* Table */}
        <Card>
          <Table title="Sample Billing Data" columns={sampleColumns} data={sampleData} />
        </Card>
      </Stack>
    </Box>
  );
}
