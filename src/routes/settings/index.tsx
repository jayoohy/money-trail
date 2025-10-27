"use client";

import { useSelector, useDispatch } from "react-redux";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { selectCurrency } from "@/store/settings/settings.selector";
import { setCurrency } from "@/store/settings/settings.slice";
import { ModeToggle } from "@/components/themes/mode-toggle.component";
import { Link } from "react-router";

export default function SettingsPage() {
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrency);

  const handleCurrencyChange = (value: string) => {
    dispatch(setCurrency(value));
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl text-center font-semibold text-gray-800 dark:text-white mb-4">
        Settings
      </h1>

      {/* Currency Settings */}
      <Card className="bg-white dark:bg-green/10 border border-gray-200 dark:border-green-900">
        <CardHeader>
          <CardTitle className="text-gray-700 dark:text-gray-100">
            Currency Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <Label className="text-sm text-gray-600 dark:text-gray-300">
              Preferred Currency Symbol
            </Label>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Choose how currency appears throughout your dashboard
            </p>
          </div>

          <Select onValueChange={handleCurrencyChange} defaultValue={currency}>
            <SelectTrigger className="w-[150px] bg-white dark:bg-green/20 border border-gray-300 dark:border-green-800">
              <SelectValue placeholder="Select Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="₦">₦ - Naira</SelectItem>
              <SelectItem value="$">$ - US Dollar</SelectItem>
              <SelectItem value="€">€ - Euro</SelectItem>
              <SelectItem value="£">£ - Pound Sterling</SelectItem>
              <SelectItem value="₹">₹ - Indian Rupee</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Separator />

      {/* Appearance Settings */}
      <Card className="bg-white dark:bg-green/10 border border-gray-200 dark:border-green-900">
        <CardHeader>
          <CardTitle className="text-gray-700 dark:text-gray-100">
            Appearance
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <ModeToggle />
            <div>
              <Label className="text-sm text-gray-600 dark:text-gray-300">
                Dark Mode
              </Label>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Toggle between light and dark theme
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Manage Categories */}
      <Card className="bg-white dark:bg-green/10 border border-gray-200 dark:border-green-900">
        <CardHeader>
          <CardTitle className="text-gray-700 dark:text-gray-100">
            Manage Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <Label className="text-sm text-gray-600 dark:text-gray-300">
              View all your spending categories
            </Label>
          </div>

          <Link
            to="/categories"
            className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition-all"
          >
            Open Categories
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
